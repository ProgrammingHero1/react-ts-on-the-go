export interface UserProps {
    name: string
    job: string
}

export default function User({ name, job }: UserProps) {
    
    return (
        <>
            <h3>{name}</h3>
            <p>{job}</p>
        </>
    )
}