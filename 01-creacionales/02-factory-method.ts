/**
 * ! Factory Method:
 * El patrón Factory Method permite crear objetos sin especificar
 * la clase exacta del objeto que se creará.
 *
 * En lugar de eso, delegamos la creación de objetos a subclases o métodos
 * que encapsulan esta lógica.
 *
 * * Es útil cuando una clase no puede anticipar la clase
 * * de objetos que debe crear.
 *
 * https://refactoring.guru/es/design-patterns/factory-method
 *
 */

import { COLORS } from "../helpers/colors.ts";

interface Hamburguer {
    prepare(): void;
}

class ChickeHamburguer implements Hamburguer {
  prepare(): void {
    console.log('Preparando hamburguesa de %cpollo', COLORS.blue);
  }
}

class BeefHamburguer implements Hamburguer {
  prepare(): void {
    console.log('Preparando hamburguesa de res');
  }
}

class BeanHamburguer implements Hamburguer {
  prepare(): void {
    console.log('Preparando hamburguesa de frijoles');
  }
}

abstract class Restaurant {

    abstract createHamburguer(): Hamburguer;

    orderHamburguer(): void {
        const hamburguer = this.createHamburguer();
        hamburguer.prepare();
    }
}

class ChickenRestaurant extends Restaurant {

    override createHamburguer(): Hamburguer {
        return new ChickeHamburguer();
    }
}

class BeefRestaurant extends Restaurant {

    override createHamburguer(): Hamburguer {
        return new BeefHamburguer();
    }
}

class BeanRestaurant extends Restaurant {
    override createHamburguer(): Hamburguer {
        return new BeanHamburguer();
    }
}



function main() {
    let restaurant: Restaurant;

    const input = prompt('¿Qué tipo de hamburguesa quieres? (pollo/res/bean)');
    const bugerType = input ? input.toLowerCase() : '';

    switch (bugerType) {
        case 'pollo':
            restaurant = new ChickenRestaurant();
            break;
        case 'res':
            restaurant = new BeefRestaurant();
            break;
        case 'bean':
            restaurant = new BeanRestaurant();
            break;
        default:
            console.log('Tipo de hamburguesa no reconocido');
            return;
    }

    restaurant.orderHamburguer();
}

main();