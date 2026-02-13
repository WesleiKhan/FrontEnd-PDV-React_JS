function FormatedDateHours(dateIso) {

    if (!dateIso) return "-";

    const date = new Date(dateIso);

    if (isNaN(date.getTime())) return "-";

    return new Intl.DateTimeFormat("pt-BR", {
        dateStyle: "short",
        timeStyle: "short",
    }).format(new Date(dateIso));
}

export default FormatedDateHours;