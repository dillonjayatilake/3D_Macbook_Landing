import { Environment, Lightformer } from "@react-three/drei"

const StudioLights = () => {
    return (
        <group name="lights">
            <Environment resolution={256}>
                <group>
                    <Lightformer
                        form="rect"
                        intensity={10}
                        position={[-10, 5, -5]}
                        scale={10}
                        rotation-y={Math.PI / 2} // Fixed: rotation-y instead of rotation y
                    />

                    <Lightformer
                        form="rect"
                        intensity={10}
                        position={[10, 0, 1]}
                        scale={10}
                        rotation-y={Math.PI / 2} // Fixed: rotation-y instead of rotation y
                    />
                </group>
            </Environment>
            <spotLight
                angle={0.15}
                decay={0}
                intensity={Math.PI * 0.2}
                position={[-2, 10, 5]} // Added position (recommended)
            />
        </group>
    )
}

export default StudioLights