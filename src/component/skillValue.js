export default function SkillValue({ titel, value }) {
    return (
        <>
            <p className="skill-titel">{titel}</p>
            <div className="skill-line" style={{
                'width': value,
            }}>
            </div>
        </>
    )
}