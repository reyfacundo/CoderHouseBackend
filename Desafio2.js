const fs = require('fs')

class ProductManager{
    constructor(filepath){
        this.filepath = filepath;
    }
    
    async #test(){
        try{
            const content = await fs.promises.readFile(this.filepath, "utf-8")
            const parse = JSON.parse(content)
            return parse
        }catch (error){
            console.log(error)
        }
    }

    async #checkCode(code){
        const FC = await this.#test();
        return FC.find((obj) => obj.code === code)
    }
    async getProducts(){
        const FC = await this.#test();
        try {
            if(FC.length === 0) throw new Error('Not found')
            else console.log(FC)
        }catch(error){
            console.log('Not found')
        }
    }

    async addProducts(obj){
        const FC = await this.#test();
        if (await this.#checkCode(obj.code)) return console.log(`${obj.code} not found`)
        
        try{
            if (FC.length !== 0) await fs.promises.writeFile(this.filepath, JSON.stringify([...FC, {...obj, id: FC[FC.length - 1].id +1}], null, 2), 'utf-8')
            else await fs.promises.writeFile(this.filepath, JSON.stringify([{...obj, id: 1 }]), 'utf-8')
        } catch(error){
            console.log(error)
        }
    }

    async getId(id){
        try{
            const FC = await this.#test()

            if(!FC.find((obj) => obj.id === id)) throw new Error (`Id ${obj.id} not found`)
            else console.log(FC.find((obj)=> obj.id === id))
        }catch(error){
            console.log(`Id ${id} not found`)
        }
    }

    async update(id,obj){
        try{
        const FC = await this.#test();
        const update = FC.map((product)=> product.id === id ? {...product, ...obj} : product )
        if (!FC.find((obj)=> obj.id === id)) throw new Error(`${obj.id}id not found`)
        else await fs.promises.writeFile(this.filepath, JSON.stringify(update, null, 2))
    } catch(error){
        console.log(`${id}id not found`)
    }
}

    async deleteProduct(id){
    try{
        const FC = await this.#test()
        const filter = FC.filter((product) => product.id !== id);
        if (!FC.find((obj)=> obj.id ==id )) throw new Error(`${id} not found`)
        else await fs.promises.writeFile(this.filepath, JSON.stringify(filter,null, 2))
    }catch (error){
        console.log(error)
    }
}
}
module.exports = ProductManager;