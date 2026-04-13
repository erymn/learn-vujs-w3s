<template>
    <h1>Vue Hook Example</h1>

    <h4>The 'beforeCreate' Lifecycle Hook</h4>
    <p>We can see the console.log() message from 'beforeCreate' lifecycle hook, but there is no effect from the text
        change we try to do to the Vue data property, because the Vue data property is not created yet.</p>
    <button @click="this.activeComp = !this.activeComp">Add/Remove Component</button>
    <div>
        <befcre-comp-one v-if="activeComp"></befcre-comp-one>
    </div>

    <hr />
    <h4>The 'created' Lifecycle Hook</h4>
    <p>We can see the console.log() message from 'created' lifecycle hook, and the text change we try to do to the Vue
        data property has an effect, because the Vue data property is created at this stage.</p>
    <button @click="this.activeComp = !this.activeComp">Add/Remove Component</button>
    <div>
        <cre-comp-one v-if="activeComp"></cre-comp-one>
    </div>

    <hr />
    <h4>The 'beforeMount' Lifecycle Hook</h4>
    <p>We can see the console.log() message from the 'beforeMount' lifecycle hook, but the text change we try to do to
        the 'pEl' paragraph DOM element does not work, because the 'pEl' paragraph DOM element does not exist yet at
        this stage.</p>
    <button @click="this.activeComp = !this.activeComp">Add/Remove Component</button>
    <div>
        <!-- <befmou-comp-one v-if="activeComp"></befmou-comp-one> -->
    </div>

    <hr />
    <h4>The 'mounted' Lifecycle Hook</h4>
    <button @click="this.activeComp = !this.activeComp">Add/Remove Component</button>
    <div>
        <mou-comp-one v-if="activeComp"></mou-comp-one>
    </div>

    <hr />
    <h4>The 'mounted' Lifecycle Hook</h4>
    <p>Below is an example that is perhaps more useful: To put the cursor inside the input field after the form
        component is mounted, so the user can just start typing.</p>
    <button @click="this.activeComp = !this.activeComp">Add/Remove Component</button>
    <div>
        <mou-comp-one-041 v-if="activeComp"></mou-comp-one-041>
    </div>

    <hr />
    <h4>The 'beforeUpdate' Lifecycle Hook</h4>
    <p>Whenever there is a change in our page, the application is 'updated' and the 'beforeUpdate' hook happens just
        before that.</p>
    <p>It is safe to modify our page in the 'beforeUpdate' hook like we do here, but if we modify our page in the
        'updated' hook, we will generate an infinite loop.</p>
    <button @click="this.activeComp = !this.activeComp">Add/Remove Component</button>
    <div>
        <befupd-comp-one v-if="activeComp"></befupd-comp-one>
    </div>

    <hr />
    <h4>The 'errorCaptured' Lifecycle Hook</h4>
    <p>Whenever there is an error in a child component, the errorCaptured() function is called on the parent.</p>
    <p>When the button inside the component is clicked, a method will run that tries to do changes to a $refs object
        that does not exist. This creates an error in the component that triggers the 'errorCaptured' lifecycle hook in
        the parent, and an alert box is displayed with information about the error.</p>
    <p>After clicking "Ok" in the alert box you can see the error in the browser console.</p>
    <div>
        <errcapture-comp-one></errcapture-comp-one>
    </div>

    <hr />
    <h4>The 'renderTracked' and 'renderTriggered' Hooks</h4>
    <p>The 'renderTracked' and 'renderTriggered' hooks are meant to be used in debugging, and are only available in
        development mode.</p>
    <p><mark>This example only works in development mode, so to see the hooks run, you must copy this code and run it on
            you own computer in development mode.</mark></p>
    <div>
        <ren-track-triggered-com-one></ren-track-triggered-com-one>
    </div>

    <hr />
    <h4>The 'activated' and 'deactivated' Hooks</h4>
    <p>The 'activated' and 'deactivated' hooks are only called when a component is cached using the 'keep-alive'
        element.
    </p>
    <p>The 'mounted' hook is called when the component is first created, but the 'activated' hook is not called until
        the component is displayed again after being hidden.</p>
    <p>The 'deactivated' hook is called when the component is hidden.</p>
    <button @click="this.activeComp = !this.activeComp">Include component</button>
    <div>
        <KeepAlive>
            <activate-deactivate-comp-one v-if="activeComp"></activate-deactivate-comp-one>
        </KeepAlive>
    </div>
</template>

<script>
export default {
    data() {
        return {
            activeComp: true
        }
    },
    // errorCaptured() {
    //     alert("An error occurred");
    // },
    errorCaptured(error, compInst, errorInfo) {
        console.log("error: ", error);
        console.log("compInst: ", compInst);
        console.log("errorInfo: ", errorInfo);
    }
}
</script>

<style>
#app>div {
    border: dashed black 1px;
    border-radius: 10px;
    padding: 10px;
    margin-top: 10px;
    background-color: lightgreen;
}

#pResult {
    background-color: lightcoral;
    display: inline-block;
}
</style>