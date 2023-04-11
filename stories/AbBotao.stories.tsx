import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { AbBotao } from "../src/components/AbBotao";

export default {
    title: "Components/AbBotao",
    component: AbBotao,
    tags: ['autodocs']
} as Meta<typeof AbBotao>;

type Story = StoryObj<typeof AbBotao>

export const Primary: Story = {
        args: {
          primary: true,
        },
      };

