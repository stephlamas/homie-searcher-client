import "./PrivacyPage.css";

import { Container, Row } from "react-bootstrap";

import React from "react";

function PrivacyPage() {
  return (
    <>
      <Container>
        <Row>
          <span className="legalTerms">Legal terms</span>
          <h4 className="privacyPolicy">Privacy Policy</h4>
          <p className="firstParagraph">
            Our Privacy Policy explains what personal information we collect,
            how we use personal information, how personal information is shared,
            and privacy rights.
          </p>
          <span className="title-privacy">
            North America (excluding Mexico)
          </span>
          <p>
            <ul>
              <li>
                <a href="/privacy">Privacy Policy for the United States</a>
              </li>
              <li>
                <a href="/privacy">
                  Privacy Policy for outside of US (English)
                </a>
              </li>
              <li>
                <a href="/privacy">Privacy Policy for outside of US (French)</a>
              </li>
            </ul>
          </p>
          <span className="title-privacy">
            Latin America (including Mexico, Central and South America and the
            Caribbean)
          </span>
          <p>
            <ul>
              <li>
                <a href="/privacy">
                  Privacy Policy for Latin America (English)
                </a>
              </li>
              <li>
                <a href="/privacy">
                  Privacy Policy for Latin America (Spanish)
                </a>
              </li>
              <li>
                <a href="/privacy">
                  Privacy Policy for Latin America (Portuguese)
                </a>
              </li>
            </ul>
          </p>
          <span className="title-privacy">Europe, Middle East, and Africa</span>
          <p>
            <ul>
              <li>
                <a href="/privacy">
                  Privacy Policy for the Europe, Middle East, Africa and other
                  countries
                </a>
              </li>
            </ul>
          </p>
          <span className="title-privacy">Asia Pacific</span>
          <p>
            <ul>
              <li>
                <a href="/privacy">
                  Privacy Policy for Asia Pacific (excluding China)
                </a>
              </li>
            </ul>
          </p>
          <span className="title-privacy">China</span>
          <p>
            <ul>
              <li>
                <a href="/privacy">Privacy Policy for China</a>
              </li>
            </ul>
            Please review the supplemental privacy policies linked within the
            privacy policy documents, such as for certain Airbnb services, that
            may be applicable to you.
          </p>
          <span className="title-privacy">
            Supplemental Privacy Policy Documents:
          </span>
          <p>
            <ul>
              <li>
                <a href="/privacy">Outside of United States</a>
              </li>
              <li>
                <a href="/privacy">California and Vermont</a>
              </li>
              <li>
                <a href="/privacy">Cookie Policy</a>
              </li>
              <li>
                <a href="/privacy">Enterprise Customers and Homie for Work</a>
              </li>
            </ul>
          </p>
        </Row>
      </Container>
    </>
  );
}

export default PrivacyPage;
