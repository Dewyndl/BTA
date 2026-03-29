import { IChangeBodyArgs } from "../interfaces"

export const changeBody = ({
    key,
    value,
    setState
}: IChangeBodyArgs) => {
    setState(prevData => ({
        ...prevData,
        [key]: value
    }))
}