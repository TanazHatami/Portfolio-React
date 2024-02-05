export default function SkillValue({ titel, value }) {
    return (
        <>
            <div className="row skill-row ">
                <div className="col-12 skill-titel">
                    <p>{titel}</p>
                </div>
                <div className="skill-line" style={{
                    'width':value,
                    'height':'10px',
                    'backgroundColor':'orange',
                  
                }}>
                </div>
            </div>
        </>
    )
}