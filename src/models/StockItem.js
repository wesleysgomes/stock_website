export const Categories = ["Jogos", "Livros", "Brinquedos", "Acessórios"];

export default class StockItem {
    constructor({ name, description, quantity, price, category}){
        this.id =  Math.floor(Math.random() * 1000000);
        this.name = name;
        this.description = description;
        this.quantity = quantity;
        this.price = +price;
        this.category = category;
        this.createdAt = new Date()
        this.updatedAt = new Date()
        this.#validade()
    }

    #validade(){
        const validName = typeof this.name === "string";
        const validDescription = typeof this.description === "string";
        const validQuantity = typeof this.quantity === "number";
        const validPrice = typeof this.price === "number"
        const validCategory = Categories.includes(this.category)
        if(!(validName &&
            validDescription &&
            validQuantity &&
            validPrice &&
            validCategory)){
                throw new Error("Inalid item!")
            }
    }
}