import React, { useState } from 'react'

const ModalRegister = ({ agregarEstudiante }) => {
    const [form, setForm] = useState({
        nombre: "",
        edad: 0,
        notafinal: 0
    })
    const registrar = () => {
        agregarEstudiante(form)
        setForm({
            nombre: "",
            edad: 0,
            notafinal: 0
        });
        document.getElementById("btnClose").click()
    }
    return (
        <>
            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@getbootstrap">Nuevo Estudiante</button>

            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="exampleModalLabel">Registar Estudiante</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <form>
                                <div class="mb-3">
                                    <label for="recipient-name" class="col-form-label">Nombre :</label>
                                    <input type="text" class="form-control" id="recipient-name" onChange={(e)=>setForm({...form,nombre:e.target.value} )} value={form.nombre} />
                                </div>
                                <div class="mb-3">
                                    <label for="recipient-name" class="col-form-label">edad :</label>
                                    <input type="number" class="form-control" id="recipient-name"onChange={(e)=>setForm({...form,edad:e.target.value})} value={form.edad} />
                                </div>
                                <div class="mb-3">
                                    <label for="recipient-name" class="col-form-label">Nota :</label>
                                    <input type="number" class="form-control" id="recipient-name" onChange={(e)=>setForm({...form,notafinal:e.target.value})}  value={form.notafinal} />
                                </div>

                            </form>
                        </div>
                        <div class="modal-footer">
                            <button type="button" id="btnClose" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                            <button type="button" onClick={registrar} class="btn btn-primary">Registrar</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ModalRegister