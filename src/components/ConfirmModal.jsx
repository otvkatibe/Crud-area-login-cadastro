import React from "react";

export default function ConfirmModal({ open, onConfirm, onCancel, message }) {
    if (!open) return null;
    return (
        <div style={{
            position: "fixed",
            top: 0, left: 0, right: 0, bottom: 0,
            background: "rgba(0,0,0,0.4)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1000
        }}>
            <div style={{
                background: "#fff",
                padding: 24,
                borderRadius: 8,
                minWidth: 300,
                boxShadow: "0 2px 8px rgba(0,0,0,0.2)"
            }}>
                <p>{message || "Tem certeza?"}</p>
                <div style={{ display: "flex", justifyContent: "flex-end", gap: 8 }}>
                    <button onClick={onCancel}>Cancelar</button>
                    <button onClick={onConfirm} style={{ background: "#d33", color: "#fff" }}>Confirmar</button>
                </div>
            </div>
        </div>
    );
}