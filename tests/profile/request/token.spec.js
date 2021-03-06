const { YotiDate } = require('yoti');

const {
  TokenRequestBuilder,
  SandboxAgeVerificationBuilder,
  SandboxAnchorBuilder,
  SandboxExtraDataBuilder,
  SandboxDocumentImagesBuilder,
} = require('../../..');

const {
  dataUrl,
} = require('../helpers');

const SOME_REMEMEBER_ME_ID = 'someRememberMeId';
const SOME_VALUE = 'someStringValue';
const SOME_ANCHOR = new SandboxAnchorBuilder()
  .withType('someAnchorType')
  .withSubType('someSubType')
  .withValue('someValue')
  .withTimestamp(YotiDate.fromDateString('2020-01-02'))
  .build();
const SOME_DATE_OF_BIRTH_STRING = '1989-01-02';
const SOME_DATE_OF_BIRTH = YotiDate.fromDateString(SOME_DATE_OF_BIRTH_STRING);
const SOME_IMAGE_CONTENT = Buffer.from('someStringValue');

describe('TokenRequest', () => {
  it('should build with remember me ID', () => {
    const tokenRequest = new TokenRequestBuilder()
      .withRememberMeId(SOME_REMEMEBER_ME_ID)
      .build();

    const expectedData = {
      remember_me_id: SOME_REMEMEBER_ME_ID,
      profile_attributes: [],
    };

    expect(JSON.stringify(tokenRequest))
      .toBe(JSON.stringify(expectedData));
  });
  it('should build with family name', () => {
    const tokenRequest = new TokenRequestBuilder()
      .withFamilyName(SOME_VALUE)
      .build();

    expect(tokenRequest).toContainAttribute({
      name: 'family_name',
      value: SOME_VALUE,
    });
  });
  it('should build with family name with anchors', () => {
    const tokenRequest = new TokenRequestBuilder()
      .withFamilyName(SOME_VALUE, [SOME_ANCHOR])
      .build();

    expect(tokenRequest).toContainAttribute({
      name: 'family_name',
      value: SOME_VALUE,
      anchors: [SOME_ANCHOR],
    });
  });
  it('should build with email address', () => {
    const tokenRequest = new TokenRequestBuilder()
      .withEmailAddress(SOME_VALUE)
      .build();

    expect(tokenRequest).toContainAttribute({
      name: 'email_address',
      value: SOME_VALUE,
    });
  });
  it('should build with email address with anchors', () => {
    const tokenRequest = new TokenRequestBuilder()
      .withEmailAddress(SOME_VALUE, [SOME_ANCHOR])
      .build();

    expect(tokenRequest).toContainAttribute({
      name: 'email_address',
      value: SOME_VALUE,
      anchors: [SOME_ANCHOR],
    });
  });
  it('should build with full name', () => {
    const tokenRequest = new TokenRequestBuilder()
      .withFullName(SOME_VALUE)
      .build();

    expect(tokenRequest).toContainAttribute({
      name: 'full_name',
      value: SOME_VALUE,
    });
  });
  it('should build with full name with anchors', () => {
    const tokenRequest = new TokenRequestBuilder()
      .withFullName(SOME_VALUE, [SOME_ANCHOR])
      .build();

    expect(tokenRequest).toContainAttribute({
      name: 'full_name',
      value: SOME_VALUE,
      anchors: [SOME_ANCHOR],
    });
  });
  it('should build with date of birth', () => {
    const tokenRequest = new TokenRequestBuilder()
      .withDateOfBirth(SOME_DATE_OF_BIRTH)
      .build();

    expect(tokenRequest).toContainAttribute({
      name: 'date_of_birth',
      value: SOME_DATE_OF_BIRTH_STRING,
    });
  });
  it('should build with date of birth with anchors', () => {
    const tokenRequest = new TokenRequestBuilder()
      .withDateOfBirth(SOME_DATE_OF_BIRTH, [SOME_ANCHOR])
      .build();

    expect(tokenRequest).toContainAttribute({
      name: 'date_of_birth',
      value: SOME_DATE_OF_BIRTH_STRING,
      anchors: [SOME_ANCHOR],
    });
  });
  it('should build with date of birth string', () => {
    const tokenRequest = new TokenRequestBuilder()
      .withDateOfBirthString(SOME_DATE_OF_BIRTH_STRING)
      .build();

    expect(tokenRequest).toContainAttribute({
      name: 'date_of_birth',
      value: SOME_DATE_OF_BIRTH_STRING,
    });
  });
  it('should build with date of birth with anchors string', () => {
    const tokenRequest = new TokenRequestBuilder()
      .withDateOfBirthString(SOME_DATE_OF_BIRTH_STRING, [SOME_ANCHOR])
      .build();

    expect(tokenRequest).toContainAttribute({
      name: 'date_of_birth',
      value: SOME_DATE_OF_BIRTH_STRING,
      anchors: [SOME_ANCHOR],
    });
  });
  it('should build with gender', () => {
    const tokenRequest = new TokenRequestBuilder()
      .withGender(SOME_VALUE)
      .build();

    expect(tokenRequest).toContainAttribute({
      name: 'gender',
      value: SOME_VALUE,
    });
  });
  it('should build with gender with anchors', () => {
    const tokenRequest = new TokenRequestBuilder()
      .withGender(SOME_VALUE, [SOME_ANCHOR])
      .build();

    expect(tokenRequest).toContainAttribute({
      name: 'gender',
      value: SOME_VALUE,
      anchors: [SOME_ANCHOR],
    });
  });
  it('should build with given names', () => {
    const tokenRequest = new TokenRequestBuilder()
      .withGivenNames(SOME_VALUE)
      .build();

    expect(tokenRequest).toContainAttribute({
      name: 'given_names',
      value: SOME_VALUE,
    });
  });
  it('should build with given names with anchors', () => {
    const tokenRequest = new TokenRequestBuilder()
      .withGivenNames(SOME_VALUE, [SOME_ANCHOR])
      .build();

    expect(tokenRequest).toContainAttribute({
      name: 'given_names',
      value: SOME_VALUE,
      anchors: [SOME_ANCHOR],
    });
  });
  it('should build with nationality', () => {
    const tokenRequest = new TokenRequestBuilder()
      .withNationality(SOME_VALUE)
      .build();

    expect(tokenRequest).toContainAttribute({
      name: 'nationality',
      value: SOME_VALUE,
    });
  });
  it('should build with nationality with anchors', () => {
    const tokenRequest = new TokenRequestBuilder()
      .withNationality(SOME_VALUE, [SOME_ANCHOR])
      .build();

    expect(tokenRequest).toContainAttribute({
      name: 'nationality',
      value: SOME_VALUE,
      anchors: [SOME_ANCHOR],
    });
  });
  it('should build with phone number', () => {
    const tokenRequest = new TokenRequestBuilder()
      .withPhoneNumber(SOME_VALUE)
      .build();

    expect(tokenRequest).toContainAttribute({
      name: 'phone_number',
      value: SOME_VALUE,
    });
  });
  it('should build with phone number with anchors', () => {
    const tokenRequest = new TokenRequestBuilder()
      .withPhoneNumber(SOME_VALUE, [SOME_ANCHOR])
      .build();

    expect(tokenRequest).toContainAttribute({
      name: 'phone_number',
      value: SOME_VALUE,
      anchors: [SOME_ANCHOR],
    });
  });
  it('should build with postal address', () => {
    const tokenRequest = new TokenRequestBuilder()
      .withPostalAddress(SOME_VALUE)
      .build();

    expect(tokenRequest).toContainAttribute({
      name: 'postal_address',
      value: SOME_VALUE,
    });
  });
  it('should build with postal address with anchors', () => {
    const tokenRequest = new TokenRequestBuilder()
      .withPostalAddress(SOME_VALUE, [SOME_ANCHOR])
      .build();

    expect(tokenRequest).toContainAttribute({
      name: 'postal_address',
      value: SOME_VALUE,
      anchors: [SOME_ANCHOR],
    });
  });
  it('should build with selfie', () => {
    const tokenRequest = new TokenRequestBuilder()
      .withSelfie(SOME_VALUE)
      .build();

    expect(tokenRequest).toContainAttribute({
      name: 'selfie',
      value: Buffer.from(SOME_VALUE).toString('base64'),
    });
  });
  it('should build with selfie with anchors', () => {
    const tokenRequest = new TokenRequestBuilder()
      .withSelfie(SOME_VALUE, [SOME_ANCHOR])
      .build();

    expect(tokenRequest).toContainAttribute({
      name: 'selfie',
      value: Buffer.from(SOME_VALUE, [SOME_ANCHOR]).toString('base64'),
      anchors: [SOME_ANCHOR],
    });
  });
  it('should build with base64 encoded selfie', () => {
    const tokenRequest = new TokenRequestBuilder()
      .withBase64Selfie(SOME_VALUE)
      .build();

    expect(tokenRequest).toContainAttribute({
      name: 'selfie',
      value: SOME_VALUE,
    });
  });
  it('should build with structured postal address', () => {
    const tokenRequest = new TokenRequestBuilder()
      .withStructuredPostalAddress(SOME_VALUE)
      .build();

    expect(tokenRequest).toContainAttribute({
      name: 'structured_postal_address',
      value: SOME_VALUE,
    });
  });
  it('should build with structured postal address with anchors', () => {
    const tokenRequest = new TokenRequestBuilder()
      .withStructuredPostalAddress(SOME_VALUE, [SOME_ANCHOR])
      .build();

    expect(tokenRequest).toContainAttribute({
      name: 'structured_postal_address',
      value: SOME_VALUE,
      anchors: [SOME_ANCHOR],
    });
  });
  it('should build with Document Details', () => {
    const tokenRequest = new TokenRequestBuilder()
      .withDocumentDetails(SOME_VALUE)
      .build();

    expect(tokenRequest).toContainAttribute({
      name: 'document_details',
      value: SOME_VALUE,
    });
  });
  it('should build with Document Details with anchors', () => {
    const tokenRequest = new TokenRequestBuilder()
      .withDocumentDetails(SOME_VALUE, [SOME_ANCHOR])
      .build();

    expect(tokenRequest).toContainAttribute({
      name: 'document_details',
      value: SOME_VALUE,
      anchors: [SOME_ANCHOR],
    });
  });
  it('should build with age verification', () => {
    const ageVerification = new SandboxAgeVerificationBuilder()
      .withDateOfBirth(SOME_DATE_OF_BIRTH)
      .withAgeOver(18)
      .build();

    const tokenRequest = new TokenRequestBuilder()
      .withAgeVerification(ageVerification)
      .build();

    expect(tokenRequest).toContainAttribute({
      name: 'date_of_birth',
      value: SOME_DATE_OF_BIRTH_STRING,
      derivation: 'age_over:18',
    });
  });
  it('should build with extra data', () => {
    const extraData = new SandboxExtraDataBuilder().build();

    const tokenRequest = new TokenRequestBuilder()
      .withExtraData(extraData)
      .build();

    expect(JSON.stringify(tokenRequest))
      .toEqual(JSON.stringify({
        profile_attributes: [],
        extra_data: extraData,
      }));
  });
  it('should build with Document Images', () => {
    const documentImages = new SandboxDocumentImagesBuilder()
      .withJpegContent(SOME_IMAGE_CONTENT)
      .build();

    const tokenRequest = new TokenRequestBuilder()
      .withDocumentImages(documentImages)
      .build();

    expect(tokenRequest).toContainAttribute({
      name: 'document_images',
      value: dataUrl(SOME_IMAGE_CONTENT, 'image/jpeg'),
    });
  });
  it('should build with Document Images with anchors', () => {
    const documentImages = new SandboxDocumentImagesBuilder()
      .withJpegContent(SOME_IMAGE_CONTENT)
      .build();

    const tokenRequest = new TokenRequestBuilder()
      .withDocumentImages(documentImages, [SOME_ANCHOR])
      .build();

    expect(tokenRequest).toContainAttribute({
      name: 'document_images',
      value: dataUrl(SOME_IMAGE_CONTENT, 'image/jpeg'),
      anchors: [SOME_ANCHOR],
    });
  });
});

expect.extend({
  /**
   * @param {TokenRequest} receivedTokenRequest
   * @param {string} name
   * @param {string} value
   */
  toContainAttribute(receivedTokenRequest, expectedAttribute) {
    const expectedData = {
      profile_attributes: [expectedAttribute],
    };

    expect(JSON.stringify(receivedTokenRequest))
      .toBe(JSON.stringify(expectedData));

    return {
      message: () => 'TokenRequest contains expected attribute',
      pass: true,
    };
  },
});
