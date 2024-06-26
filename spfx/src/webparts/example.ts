import { BaseClientSideWebPart } from "@microsoft/sp-webpart-base";
import strings from "ExampleStrings";
import { WebpartProperties, render } from "component";
import styles from "./example.module.scss";

export default class ExampleWebPart extends BaseClientSideWebPart<WebpartProperties> {
    public async onInit() {
        // Add tailwindcss to webpart
        this.domElement.classList.add(styles.example);
    }

    public render(): void {
        // Render your react application
        render(this.context, this.properties, strings);
    }
}
