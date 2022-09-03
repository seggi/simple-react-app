
export const Checkbox = ({objData, onChange}:any) => {
    return (
        <>
            <input
                type="checkbox"
                id={`custom-checkbox-${objData.index}`}
                value={objData.checked}
                onChange={() => onChange({ ...objData, checked: !objData.checked })} />
        </>
    )
}

