import { StatusBar } from "expo-status-bar";
import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { useState, useRef, Suspense, useLayoutEffect } from "react";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { MTLLoader } from "three/examples/jsm/loaders/MTLLoader";
import { TextureLoader } from "expo-three";
import { useAnimatedSensor, SensorType } from "react-native-reanimated";
import ships from "../Config/ships";
import colors from "../Config/colors";
import useRGB from "../hooks/useRGB";

function Ship(props) {
  const [base] = props.tx ? useLoader(TextureLoader, [props.tx]) : [null];

  const material = props.mt ? useLoader(MTLLoader, props.mt) : null;

  const obj = useLoader(OBJLoader, props.ob, (loader) => {
    if (material) {
      material.preload();
      loader.setMaterials(material);
    }
  });

  const mesh = useRef();

  useLayoutEffect(() => {
    obj.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        child.material.map = base;
      }
    });
  }, []);

  useFrame((state, delta) => {
    let { x, y, z } = props.animatedSensor.sensor.value;
    x = ~~(x * 100) / 10000;
    y = ~~(y * 100) / 10000;
    z = ~~(z * 100) / 10000;
    mesh.current.rotation.x -= x;
    mesh.current.rotation.y -= y;
  });

  return (
    <mesh ref={mesh} rotation={[0.6, 0, 0]} position={[0, props.y, 0]}>
      <primitive object={obj} scale={props.scaleFactor} />
    </mesh>
  );
}

export default function ShipContainer({ ship }) {
  const animatedSensor = useAnimatedSensor(SensorType.GYROSCOPE, {
    interval: 100,
  });

  return (
    <Canvas style={styles.container}>
      <ambientLight intensity={0.5} />
      <spotLight
        position={[0.5, 3, 1]}
        angle={2}
        penumbra={1}
        intensity={6}
        color={colors.orange}
      />
      <spotLight
        position={[0.5, 1, 0]}
        angle={3.5}
        penumbra={1}
        intensity={6}
      />
      <Suspense fallback={null}>
        <Ship
          ob={ships[ship].object}
          mt={ships[ship].material}
          tx={ships[ship].texture}
          scaleFactor={ships[ship].scaleFactor}
          animatedSensor={animatedSensor}
          y={ships[ship].y}
        />
      </Suspense>
    </Canvas>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "60%",
    backgroundColor: "transparent",
    position: "absolute",
  },
});
