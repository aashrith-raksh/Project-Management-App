export default function SelectedProject({project}){

    const formattedDueDate = new Date(project.dueDate).toLocaleDateString('en-US', {
        year:'numeric',
        month:'short',
        day:'numeric'
    })

    return <div className="w-[35rem] mt-16">
        <header className="pb-4 mb-4 border-b-2 border-stone-300">
            <div className="flex items-center justify-between">
                <h2 className="text-3xl font-bold text-stone-600 mb-2">{project.title}</h2>
                <button className="text-stone-600 hover:text-stone-950">delete</button>
            </div>
            <p className="mb-4 text-stone-400">{project.description}</p>
            <p className="text stroke-neutral-600 whitespace-pre-wrap">{formattedDueDate}</p>
        </header>
    </div>
}