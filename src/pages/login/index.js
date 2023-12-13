import { useDispatch, useSelector } from 'react-redux'
import Button from '../../components/button'
import './styles.css'
import { selectTheme, changeToDark, changeToLight, changeWithPayLoad } from '../../redux/theme/themeSlice'

const ButtonTheme = () => {

    const theme = useSelector(selectTheme)
    const dispatch = useDispatch()


    return (
        <div className='container'>
            {/* Button is calling specific action, without payload */}
            <Button
                title={theme === "light" ? "Modo Dark" : "Modo Light"}
                onClick={() => {
                    switch (theme) {
                        case 'light':
                            dispatch(changeToDark())
                            break
                        case "dark":
                            dispatch(changeToLight())
                            break
                        default:
                            console.log("clicado")
                    }
                }}
            />

            {/* Button is calling specific action with payload */}
            <Button
                title={theme === "light" ? "Modo Dark (payload)" : "Modo Light (payload)"}
                onClick={() => theme === "light" ? dispatch(changeWithPayLoad("dark")) : dispatch(changeWithPayLoad("light"))}
            />
        </div>
    )
}

export default ButtonTheme