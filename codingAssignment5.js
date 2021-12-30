class Article {
    constructor(name, clothing) {
        this.name = name;
        this.clothing = clothing;
    }
    describer() {
        return`${this.name} creates ${this.clothing}`
    }
}

class outfit {
    constructor(name) {
        this.name = name;
        this.articles = [];
    }
    addArticle(article) {
        if (article instanceof Article) {
            this.articles.push(article);
        }else {
            throw new Error(`You can only add an instance of Article. Argument is not a article: ${article}`);
        }
        }
        describe() {
            return `${this.name} has ${this.articles.length} articles.`;
        }
    }
    class Menu {
        constructor(){
            this.outfits = [];
            this.selectedOutfit = null;
        }
        start(){
            let selection = this.showMainMenuOptions();
            while(selection != 0) {
                switch(selection) {
                    case '1':
                    this.createOutfit();
                    break;
                    case '2':
                        this.viewOutfit();
                        break;
                        case '3':
                            this.deleteOutfit();
                            break;
                            case '4':
                                this.displayOutfits();
                                break;
                            default:
                                selection = 0;
                                
                }
                selection = this.showMainMenuOptions();
            }
            alert('Goodbye!');
        }
        showMainMenuOptions() {
            return prompt(`
            0) exit
            1) create new outfit
            2) view outfit
            3) delete outfit
            4) display all outfits
            `);
        }
        showOutfitMenuOptions(outfitInfo){
            return prompt(`
            0) back
            1) create article of clothing
            2) delete article of clothing
            ${outfitInfo}
            `)

        }
        displayOutfits() {
            let outfitString = '';
            for (let i=0; i< this.outfits.length; i++){
                outfitString += i +') ' + this.outfits[i].name + '\n';
            }
            alert(outfitString);
        }
        createOutfit() {
            let name = prompt('Enter name for new outfit:');
            this.outfits.push(new outfit(name));
        }
        viewOutfit() {
            let index = prompt('Enter the index of the outfit you wish to view:');
            if (index > -1 && index < this.outfits.length) {
                this.selectedOutfit = this.outfits[index];
                let description = 'Outfit Name: ' + this.selectedOutfit.name + '\n';
                for(let i = 0; i < this.selectedOutfit.articles.length; i++){
                    description += i + ') ' + this.selectedOutfit.articles[i]. name + ' - ' + this.selectedOutfit.articles[i]. clothing + '\n';
                }
                let selection = this.showOutfitMenuOptions(description);
                switch (selection) {
                    case '1' :
                    this.createArticle();
                    break;
                    case '2':
                        this.deleteArticle();
                        break;
                }
            }
        }
        deleteOutfit() {
            let index = prompt('Enter the index of the Outfit you wish to delete');
            if (index > -1 && index < this.outfits.length) {
                this.outfits.splice(index, 1);
            }
        }
        createArticle() {
            let name = prompt('Enter name for new article of clothing:');
            let clothing = prompt ('Enter type for new article of clothing');
            this.selectedOutfit.articles.push(new Article(name, clothing));
        }
        deleteArticle() {
            let index = prompt('Enter the index of the article of clothing you wish to delete:');
            if (index > -1 && index < this.selectedOutfit.articles.length) {
                this.selectedOutfit.articles.splice(index, 1);

            }
        }

    }

let menu = new Menu();
menu.start();