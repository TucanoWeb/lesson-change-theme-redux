import {
    ButtonWrapper
} from "./styles"

// redux
import { useSelector } from "react-redux"
import {
    selectTheme,
} from "../../redux/theme/themeSlice"

const Button = ({ title, onClick }) => {

    const theme = useSelector(selectTheme)

    return (
        <ButtonWrapper
            theme={theme}
            onClick={onClick}>
            {title}
        </ButtonWrapper>
    )
}

export default Button