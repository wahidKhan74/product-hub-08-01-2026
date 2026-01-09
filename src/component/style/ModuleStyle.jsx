import "./ModuleStyle.css";

export default function ModuleStyle() {
    return (
        <div className="module-container">
            <h2 className="module-title">This is a heading with module styles</h2>
            <p className="module-paragraph">
                This paragraph is styled using CSS Modules in a React component.
            </p>
            <button className="module-button">Click me</button>
        </div>
    );
}