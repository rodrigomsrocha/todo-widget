import { CaretDown, Plus } from '@phosphor-icons/react'
import { useState } from 'react'

export function App() {
  const [isItemOpen, setIsItemOpen] = useState(false)

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-[#1c1c1c] text-xs px-4 py-3">my todos</header>
      <div>
        <div className="py-1 border-b border-[#4a4a4a]">
          <header className="px-4 py-3 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <button
                className={`${isItemOpen ? 'rotate-180' : 'rotate-0'}`}
                onClick={() => setIsItemOpen(!isItemOpen)}
                type="button"
              >
                <CaretDown size={12} weight="bold" />
              </button>
              <strong className="text-xs">finish this app</strong>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs text-[#a1a1a1]">1/3</span>
              <div className="bg-transparent w-3 h-3 border border-[#4a4a4a] rounded-full"></div>
            </div>
          </header>
          {isItemOpen && (
            <div className="pl-9 pr-4 pb-4 flex flex-col gap-2">
              <label
                htmlFor="task"
                className="flex items-start gap-2 border border-[#4a4a4a] p-2 text-xs rounded"
              >
                <input type="checkbox" name="task" id="task" />
                <span>code item component</span>
              </label>
              <label
                htmlFor="task"
                className="flex items-start gap-2 border border-[#4a4a4a] p-2 text-xs rounded"
              >
                <input type="checkbox" name="task" id="task" />
                <span>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
                  consectetur nulla non amet dolores, at esse modi, reiciendis,
                  repudiandae vel veniam quasi in culpa quam adipisci corporis
                  dolore voluptas. Ad.
                </span>
              </label>
            </div>
          )}
        </div>
        <div className="py-1 border-b border-[#4a4a4a]">
          <header className="px-4 py-3 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <button type="button">
                <CaretDown size={12} weight="bold" />
              </button>
              <strong className="text-xs">finish this app</strong>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs text-[#a1a1a1]">1/3</span>
              <div className="bg-transparent w-3 h-3 border border-[#4a4a4a] rounded-full"></div>
            </div>
          </header>
        </div>
      </div>
      <footer className="mt-auto p-4">
        <form className="flex items-stretch gap-2 text-xs">
          <input
            className="p-2 flex-1 bg-[#313131] outline-none rounded"
            placeholder="add new todo"
            type="text"
          />
          <button
            className="hover:bg-[#292929] flex items-center justify-center p-2 rounded"
            type="submit"
          >
            <Plus size={18} />
          </button>
        </form>
      </footer>
    </div>
  )
}
