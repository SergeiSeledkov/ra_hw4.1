export default function RgbOutput(props) {
    const { input } = props;
    const regexp = /^#[0-9A-F]{6}$/i;

    function converterColor() {
        if (checkInputValue() === 'error') {
            changeBackground(undefined);

            return 'Error!';
        } else if (checkInputValue()) {
            const bigint = parseInt(input.split('#')[1], 16);
            const r = (bigint >> 16) & 255;
            const g = (bigint >> 8) & 255;
            const b = bigint & 255;

            changeBackground(input);

            return 'rgb(' + r + ',' + g + ',' + b + ')';
        }
    }

    function checkInputValue() {
        if (input.length == 7) {
            if (regexp.test(input)) {
                return true;
            } else {
                return 'error';
            }
        } else {
            document.body.style.backgroundColor = '#ffffff';

            return false;
        }
    }

    function changeBackground(color) {
        if (color) {
            document.body.style.backgroundColor = color;
        } else {
            document.body.style.backgroundColor = '#e94b35';
        }
    }

    return (
        <div className="outputRgb">
            <div className="overlay"></div>
            <div className="text">{converterColor()}</div>
        </div>
    )
}