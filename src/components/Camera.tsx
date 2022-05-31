/* eslint-disable no-throw-literal */
/* eslint-disable jsx-a11y/img-redundant-alt */
import { useRef } from 'react'
import { Camera, CameraType } from 'react-camera-pro'
import { useDispatch } from 'react-redux'
import { imageActions } from '../store/store'
import { useNavigate } from 'react-router-dom'
// import Clarifai from 'clarifai'
import camera2 from '../assets/camera2.png'
import images from '../assets/images.png'
import info from '../assets/info.png'
// import { grpc } from "clarifai-nodejs-grpc"
// const { ClarifaiStub, grpc } = require("clarifai-nodejs-grpc")
// import { grpc } from "clarifai-nodejs-grpc"
// import service from "clarifai-nodejs-grpc/proto/clarifai/api/service_pb"
// import resources from "clarifai-nodejs-grpc/proto/clarifai/api/resources_pb"
// import { StatusCode } from "clarifai-nodejs-grpc/proto/clarifai/api/status/status_code_pb"
// import { V2Client } from "clarifai-nodejs-grpc/proto/clarifai/api/service_grpc_pb"

// const clarifai = new V2Client("api.clarifai.com", grpc.ChannelCredentials.createSsl());

// const metadata = new grpc.Metadata();
// metadata.set("authorization", "Key 0416a2bad12d45e39da79d38ea4be083");

// const clarifai = new V2Client("api.clarifai.com", grpc.ChannelCredentials.createSsl())

// const metadata = new grpc.Metadata()

// const app = new Clarifai.App({
  //   apiKey: '0416a2bad12d45e39da79d38ea4be083'
  // })
  
  // const grpc2 = new grpc.

// const stub = ClarifaiStub.grpc()

// const metadata = new grpc.Metadata()
// metadata.set("authorization", "Key 0416a2bad12d45e39da79d38ea4be083")

export const Component = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const camera = useRef<CameraType>()
  // const request = new service.PostModelOutputsRequest()
  // request.setModelId('416d516bce854c04bc6383d62018aadd')

  // const verifyImage = () => {
  //   request.addInputs(
  //     new resources.Input()
  //       .setData(new resources.Data().setImage(new resources.Image().setUrl('' + camera.current?.takePhoto()))))

  // const verifyImage = () => {
  //   const request = new service.PostModelOutputsRequest();
  //   // This is the model ID of a publicly available General model. You may use any other public or custom model ID.
  //   request.setModelId("fish");
  //   request.addInputs(
  //       new resources.Input()
  //           .setData(
  //               new resources.Data()
  //                   .setImage(
  //                       new resources.Image()
  //                           .setUrl(camera.current?.takePhoto()!)
  //                   )
  //           )
  //   )

  //   clarifai.postModelOutputs(
  //       request,
  //       metadata,
  //       (error: any, response: any) => {
  //           if (error) {
  //               throw error;
  //           }

  //           if (response.getStatus().getCode() !== StatusCode.SUCCESS) {
  //               throw "Error: " + response.getStatus();
  //           }

  //           console.log("Predicted concepts, with confidence values:")
  //           for (const concept of response.getOutputsList()[0].getData().getConceptsList()) {
  //               console.log(concept.getName() + " " + concept.getValue());
  //           }
  //       }
  //   )
  //   // stub.PostInputs(
  //   //   {
  //   //       user_app_id: {
  //   //           "user_id": 'uwpus836uqkp',
  //   //           "app_id": 'fish'
  //   //       },
  //   //       model_id: 'fish',
  //   //       version_id: '416d516bce854c04bc6383d62018aadd', // This is optional. Defaults to the latest model version.
  //   //       inputs: [
  //   //           { data: { image: { base64: camera.current?.takePhoto() } } }
  //   //       ]
  //   //   },
  //   //   metadata,
  //   //   (err: string | undefined, response: { status: { code: number; description: string }; outputs: any[] }) => {
  //   //       if (err) {
  //   //           throw new Error(err);
  //   //       }
  
  //   //       if (response.status.code !== 10000) {
  //   //           throw new Error("Post inputs failed, status: " + response.status.description);
  //   //       }
  
  //   //       // Since we have one input, one output will exist here.
  //   //       const output = response.outputs[0];
  
  //   //       console.log("Predicted concepts:");
  //   //       for (const concept of output.data.concepts) {
  //   //           console.log(concept.name + " " + concept.value);
  //   //       }
  //   //   }
  //   // )
  // }

  //   stub.PostInputs(
  //     request,
  //     metadata,
  //     (error, response) => {
  //       if (error) {
  //           throw error
  //       }

  //       if (response.getStatus()?.getCode() !== StatusCode.SUCCESS) {
  //           throw "Error: " + response.getStatus()
  //       }

  //       console.log("Predicted concepts, with confidence values:")
  //       for (const concept of response.getOutputsList()[0]?.getData()?.getConceptsList()!) {
  //           console.log(concept.getName() + " " + concept.getValue())
  //       }
  //     }
  //   )
  // }

  const takeImage = () => {
    dispatch(imageActions.addImage({
      url: camera.current?.takePhoto(),
      name: ''
    }))
    navigate('/profile')
  }

  return (
    <div className='camera_wrapper'>
      <Camera ref={ camera } aspectRatio='cover' facingMode='environment' errorMessages={{
        noCameraAccessible: 'No camera device accessible. Please connect your camera or try a different browser.',
        permissionDenied: 'Permission denied. Please refresh and give camera permission.',
        switchCamera:
        'It is not possible to switch camera to different one because there is only one video device accessible.',
        canvas: 'Canvas is not supported.'
      }} />
      <div className="camera_ring"></div>
      <div className="camera_controls">
        <button><img src={ images } alt='images' /></button>
        <button onClick={ takeImage }><img src={ camera2 } alt='camera' /></button>
        <button><img src={ info } alt='info' /></button>
      </div>
    </div>
  )
}
