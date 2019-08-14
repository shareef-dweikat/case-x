import * as React from "react";
import styled from "styled-components";

const InfoContainer = styled.div``;
const TabTitleContainer = styled.div``;
const TabHeader = styled.div``;
const AdditionalInfoTab = styled.div``;

interface Props {
  reviewCount: number;
}

export default (props: Props) => {
  return (
    <InfoContainer>
      <TabTitleContainer>
        <TabHeader>Addition Information</TabHeader>
        <TabHeader>Reviews {`${props.reviewCount}`}</TabHeader>
      </TabTitleContainer>

      <AdditionalInfoTab />
    </InfoContainer>
  );
};
