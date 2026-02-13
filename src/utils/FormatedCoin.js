function FormatedCoin(value) {

    const normalizedValue = value ?? 0;

    return new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
    }).format(normalizedValue);
}

export default FormatedCoin;