import styles from "../box/BoxStart.module.css";

function SelectObjects({objects, value, onChange}) {

    return (
        <div>
            <select
                    className={styles.words_for_Users}
                    value={value}
                    onChange={onChange}
            >
                <option value="" disabled>
                    Selecione...
                </option>

                {objects.map(object => (
                    <option key={object.id}
                            value={object.id}

                    >
                        {object.name}
                    </option>
                ))}
            </select>
        </div>
    )
}

export default SelectObjects;