import { Alert } from "@chakra-ui/react"
import { ErrorBoundary } from "react-error-boundary"

const ErrorAlert = ({error} : {error: Error}) => {
    return (
    <Alert.Root status="error">
        <Alert.Indicator />
        <Alert.Content>
            <Alert.Title>
                Error
            </Alert.Title>
            <Alert.Description>
                {error.message ?? "Erro não detalhado"}
            </Alert.Description>
        </Alert.Content>
    </Alert.Root>
    ) 
}

type ErrorBoundaryDFProp = {
    children: React.ReactNode
}

const ErrorBoundaryDF = ({children} : ErrorBoundaryDFProp) => {
    return (
        <ErrorBoundary FallbackComponent={ErrorAlert}>
            {children}
        </ErrorBoundary>
    )
}

export default ErrorBoundaryDF