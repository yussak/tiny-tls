export enum ContentType {
  invalid = 0,
  changeCipherSpec = 20,
  alert = 21,
  handshake = 22,
  applicationData = 23,
}

enum ProtocolVersion {
  TLS_1_0 = 0x0301,
  TLS_1_1 = 0x0302,
  TLS_1_2 = 0x0303,
  TLS_1_3 = 0x0304,
}

// TLSRecordはTLS通信で実際に送受信されるデータの基本的な単位
export class TlsRecord {
  constructor(
    public contentType: ContentType,
    public legacyRecordVersion: ProtocolVersion,
    public length: number,
    public fragment: Buffer
  ) {}
}
