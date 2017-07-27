import { Component } from '@angular/core';

@Component({
    selector: 'header-comp',
    template: `
        <nav class="navbar navbar-light bg-faded">
            <go-button buttonColor="outline-primary" iconName="bars" id="mainmanu"></go-button>
        </nav>
    `
})

export class HeaderComponent {

}