import styled from "styled-components";
import { rem } from "polished";

const BulletListStyle = styled.ul`
  padding-left: ${rem(16)};
  padding-top: ${rem(2)};
  list-style: disc;
`;
const BulletListItem = styled.li`
  margin-bottom: ${rem(2)};
`;

type BulletListProps = {
  items: BulletListItemType[];
};
type BulletListItemType = {
  text: string;
};
export const BulletList = (props: BulletListProps) => {
  return (
    <BulletListStyle>
      {props.items.map((item) => (
        <BulletListItem>{item.text}</BulletListItem>
      ))}
    </BulletListStyle>
  );
};
