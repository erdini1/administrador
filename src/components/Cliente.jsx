const Cliente = ({ cliente }) => {

    const { nombre, telefono, email, empresa } = cliente

    return (
        <tr>
            <td>{nombre}</td>
        </tr>
    )
}

export default Cliente