// GENERATED CODE -- DO NOT EDIT!

// package: company
// file: service.proto

import * as service_pb from "./service_pb";
import * as grpc from "grpc";

interface ICompanyServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  createCompany: grpc.MethodDefinition<service_pb.Company, service_pb.Id>;
  readCompanies: grpc.MethodDefinition<service_pb.Empty, service_pb.Company>;
  readAllCompanies: grpc.MethodDefinition<service_pb.Pagination, service_pb.CompanyAllResponse>;
  readCompany: grpc.MethodDefinition<service_pb.Id, service_pb.Company>;
  updateCompany: grpc.MethodDefinition<service_pb.Company, service_pb.Id>;
  deleteCompany: grpc.MethodDefinition<service_pb.Id, service_pb.Id>;
}

export const CompanyServiceService: ICompanyServiceService;

export class CompanyServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  createCompany(argument: service_pb.Company, callback: grpc.requestCallback<service_pb.Id>): grpc.ClientUnaryCall;
  createCompany(argument: service_pb.Company, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<service_pb.Id>): grpc.ClientUnaryCall;
  createCompany(argument: service_pb.Company, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<service_pb.Id>): grpc.ClientUnaryCall;
  readCompanies(argument: service_pb.Empty, metadataOrOptions?: grpc.Metadata | grpc.CallOptions | null): grpc.ClientReadableStream<service_pb.Company>;
  readCompanies(argument: service_pb.Empty, metadata?: grpc.Metadata | null, options?: grpc.CallOptions | null): grpc.ClientReadableStream<service_pb.Company>;
  readAllCompanies(argument: service_pb.Pagination, callback: grpc.requestCallback<service_pb.CompanyAllResponse>): grpc.ClientUnaryCall;
  readAllCompanies(argument: service_pb.Pagination, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<service_pb.CompanyAllResponse>): grpc.ClientUnaryCall;
  readAllCompanies(argument: service_pb.Pagination, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<service_pb.CompanyAllResponse>): grpc.ClientUnaryCall;
  readCompany(argument: service_pb.Id, callback: grpc.requestCallback<service_pb.Company>): grpc.ClientUnaryCall;
  readCompany(argument: service_pb.Id, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<service_pb.Company>): grpc.ClientUnaryCall;
  readCompany(argument: service_pb.Id, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<service_pb.Company>): grpc.ClientUnaryCall;
  updateCompany(argument: service_pb.Company, callback: grpc.requestCallback<service_pb.Id>): grpc.ClientUnaryCall;
  updateCompany(argument: service_pb.Company, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<service_pb.Id>): grpc.ClientUnaryCall;
  updateCompany(argument: service_pb.Company, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<service_pb.Id>): grpc.ClientUnaryCall;
  deleteCompany(argument: service_pb.Id, callback: grpc.requestCallback<service_pb.Id>): grpc.ClientUnaryCall;
  deleteCompany(argument: service_pb.Id, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<service_pb.Id>): grpc.ClientUnaryCall;
  deleteCompany(argument: service_pb.Id, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<service_pb.Id>): grpc.ClientUnaryCall;
}
