export default function SideBar(){
    return <>
        <aside className="px-8 py-16 w-1/3 bg-stone-900 text-stone-300 md:w-72 rounded-r-xl">
            <h1 className="mb-8 uppercase font-bold md:text-xl text-stone-200">Projects</h1>
            <div>
                <button className="px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-200">+ Add Project</button>
            </div>
            <ul></ul>
        </aside>
    </>
}