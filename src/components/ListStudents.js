import React from 'react'

const ListStudents = ({
    reportes
}) => {

    return (
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">NOMBRE</th>
                    <th scope="col">EDAD</th>
                    <th scope="col">NOTA</th>
                </tr>
            </thead>
            <tbody>
                {
                    reportes.map((r, i) => (
                        <tr>
                            <th scope="row">{i + 1}</th>
                            <td>{r.nombre}</td>
                            <td>{r.edad}</td>
                            <td>{r.notafinal}</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    )
}

export default ListStudents