import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import App from "components/sidebar";
import { findByTestArr } from "utils/functions";

Enzyme.configure({ adapter: new Adapter() });

describe("Sidebar", () => {
  const props = {
    product: {
      data: {
        id: "B007TIE0GQ",
        title: "Shark Ninja",
        image:
          "https://images-na.ssl-images-amazon.com/images/I/51h-a5IaHeL.jpg",
        subtitle:
          "Magic Bullet NutriBullet 12-Piece High-Speed Blender/Mixer System",
        brand: "Nutribullet",
        reviews: [
          {
            customer: "ILoveToReview",
            review:
              "I had not seen the infomercial when I purchased this. I was looking for a powerful smoothie maker after my smoothie blender died. The base is MUCH heavier/substantial and well made than the Magic Bullet. It also looks more expensive/nice. I know this because I was at Target examining them both closely. The 600 watts of power has been great to tear through kale, chard, frozen berries, almonds, chia seeds. I love the consistency of the smoothie when I am done. it is not a complete liquid, but really well blended. I love that you keep the nutrition of the pulp. It is not like my first old juicer that left the pulp out of the juice, but also the nutrition. It was a NIGHTMARE to clean. Then I bought the smoothie blender that is now kaput! The Nutri Bullet literally rinses clean in ten seconds. Obviously rinse it right after you are done using it. My daughter won't touch anything green and we put kale, chard, broccoli and fruit,berries to make it NOT green and she likes it. Honestly we are NOT a family that likes kale, chard, broccoli, prunes, but feel so much better now that we are ingesting them. It took about two weeks for me to notice a difference and feel better. My husband and I have been having two a day and I have lost 4 lbs in 18 days without trying. They just keep you full and satisfied. It has taken the edge off my sweet tooth. They will keep you regular.I not sure know why they can not just give you two large smoothie cups. We only use the big size.",
            score: 5
          }
        ],
        retailer: "Amazon",
        details: [
          "Effortlessly pulverizes fruits, vegetables, superfoods and protein shakes",
          "High-torque power base and 600-watt motor",
          "Power, patented blade design with cyclonic action",
          "Includes a power base, 1 tall cup, 2 short cups, 1 flat blade and 1 emulsifying blade, 2 re-sealable lids, pocket nutritionist and manual with recipes",
          "This product is manufactured in compliance with US & Canadian Electrical Standards"
        ],
        tags: ["Pantry", "Obsolete", "Blender", "Lightning Deal"]
      }
    }
  };
  const wrapper = shallow(<App {...props} />);
  const component = findByTestArr(wrapper, "component-sidebar");
  test("Sidebar : render component without error", () => {
    expect(component.length).toBe(1);
  });
});
