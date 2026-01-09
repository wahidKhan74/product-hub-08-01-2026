import "./ModuleStyle";


export default function CondionalStyle({ isHighlighted }) {

    const containerStyle = {
        margin: '20px',
        padding: '10px',
        border: '1px solid #ccc',
        backgroundColor: isHighlighted ? 'yellow' : 'white'
    };

    const headingStyle = {
        color: isHighlighted ? 'red' : 'blue',
        textAlign: 'center'
    };

    return (
        <div style={containerStyle}>
            <h2 style={headingStyle}>This is a conditionally styled heading</h2>
            <p style={ isHighlighted ? { fontSize: '18px', fontWeight: 'bold' } : { fontSize: '16px', lineHeight: '1.5' } }>
                This paragraph's container and heading styles change based on the "isHighlighted" prop.
            </p>

            <button className={isHighlighted ? "module-button2" : "module-button"}>Click me</button>
        </div>
    );
}