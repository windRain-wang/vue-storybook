import Button from "./Button.vue";

export default {
  title: "Button/Button",
  component: Button,
};

export const Primary = () => ({
  components: { Button },
  template: "<Button />",
});
