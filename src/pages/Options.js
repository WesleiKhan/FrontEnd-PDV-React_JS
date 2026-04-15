import styles from "./Options.module.css";
import {useState} from "react";
import ChoiceMenu from "./ChoiceMenu";

function Options(props) {

    const [activeComponent, setActiveComponent] = useState("");

    const screens = {
        Products: (
            <ChoiceMenu
                menu_title="MENU DE OPÇÕES PRODUTOS"
                url_Register="/products/register"
                url_Update="/products/to/update/"
                url_Delete="/product/to/delete/"
            />
        ),
        Customers: (
            <ChoiceMenu
                menu_title="MENU DE OPÇÕES CLIENTES"
                url_Register="/customer/register"
                url_Update="/customer/update"
                url_Delete="/customer/delete"
            />
        ),
        Agreements: (
            <ChoiceMenu
                menu_title="MENU DE OPÇÕES CONVENIOS"
                url_Register="/agreement/register"
                url_Update="/agreement/update"
                url_Delete="/agreement/delete"
            />
        ),
    };



    return (
        <div className={styles.parent}>

            <div className={styles.title}>
                PDV
            </div>

            <div className={styles.conatiner_parent_of_left_and_right}>
                <div className={styles.container_left}>

                    <button
                        onClick={() => setActiveComponent("Products")}>
                        Produtos
                    </button>

                    <button
                        onClick={() => setActiveComponent("Customers")}>
                        Clientes
                    </button>

                    <button
                    onClick={() => setActiveComponent("Agreements")}>
                        Convenios
                    </button>


                </div>

                <div className={styles.container_right}>
                    {screens[activeComponent]}
                </div>
            </div>


        </div>
    )
}
export default Options;