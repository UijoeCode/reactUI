import  './button.scss'
import Options from '../../Options'

export default function Button() {
    return (
        <section>
            <h2>
                Button
            </h2>

            <div className="content">
                <button className="uijoe-button uijoe-button--primary">
                    <span className="uijoe-button__label">My Button</span>
                </button>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ullamcorper non lorem in ornare. Aliquam erat volutpat. Suspendisse sed erat pretium, rutrum augue nec, auctor orci. Cras posuere felis a mauris ullamcorper, eu fringilla mi consectetur. Aliquam cursus odio suscipit augue dign
            </div>

            <Options />
        </section>
    )
}
