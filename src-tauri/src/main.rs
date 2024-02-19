// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

use tauri::{CustomMenuItem, Manager, SystemTray, SystemTrayEvent, SystemTrayMenu, PhysicalPosition};
use tauri_plugin_positioner::{WindowExt, Position};

fn main() {
    let quit = CustomMenuItem::new("quit", "Quit");
    let system_tray_menu = SystemTrayMenu::new().add_item(quit);

    tauri::Builder::default()
        .plugin(tauri_plugin_positioner::init())
        .system_tray(SystemTray::new().with_menu(system_tray_menu))
        .on_system_tray_event(|app, event| {
            tauri_plugin_positioner::on_tray_event(app, &event);
            match event {
                SystemTrayEvent::LeftClick {
                    position: _,
                    size: _,
                    .. 
                } => {
                    let window = app.get_window("main").unwrap();
                    let _ = window.move_window(Position::TrayCenter);
                    let current_position = window.outer_position().unwrap();
                    let offset_position = PhysicalPosition {
                        x: current_position.x,
                        y: current_position.y - 14,
                    };
                    let _ = window.set_position(tauri::Position::Physical(offset_position));
                    window.show().unwrap();
                    window.set_focus().unwrap();
                },
                SystemTrayEvent::MenuItemClick { id, .. } => match id.as_str() {
                    "quit" => {
                        std::process::exit(0);
                    }
                    _ => {}
                },
                _ => {}
            }
        })
        .on_window_event(|event| match event.event() {
            tauri::WindowEvent::Focused(is_focused) => {
                if !is_focused {
                    event.window().hide().unwrap()
                }
            }
            _ => {}
        })
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
