// GENERATED CODE -- DO NOT EDIT!

// package: company
// file: service.proto

import * as service_pb from "./service_pb";
import * as grpc from "grpc";

interface ICompanyService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  createCompany: grpc.MethodDefinition<service_pb.CreateCompanyReq, service_pb.CreateCompanyRes>;
}

export const CompanyService: ICompanyService;

export class CompanyClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  createCompany(argument: service_pb.CreateCompanyReq, callback: grpc.requestCallback<service_pb.CreateCompanyRes>): grpc.ClientUnaryCall;
  createCompany(argument: service_pb.CreateCompanyReq, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<service_pb.CreateCompanyRes>): grpc.ClientUnaryCall;
  createCompany(argument: service_pb.CreateCompanyReq, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<service_pb.CreateCompanyRes>): grpc.ClientUnaryCall;
}
