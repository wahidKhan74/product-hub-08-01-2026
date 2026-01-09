export default function InlineStyle() {

    const headingStyle = {
        color: 'blue',
        textAlign: 'center'
    };
    return (
        <div style={{ margin: '20px', textAlign: 'center' ,padding:'10px', border:'1px solid #ccc'}}>
            <h2 style={headingStyle}>This is a heading with inline styles</h2>
            <p style={{ fontSize: '16px', lineHeight: '1.5' }}>
                This paragraph is styled using inline CSS in a React component.
            </p>
        </div>
    );
}