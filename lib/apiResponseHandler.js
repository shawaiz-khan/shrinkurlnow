export const handleApiResponse = async (response) => {

  const statusCode = response.status;

  const messages = {
    200: 'Request was successful.',
    201: 'Resource created successfully.',
    400: 'Bad Request. Please check the data.',
    401: 'Unauthorized. Please log in.',
    403: 'Forbidden. You do not have permission.',
    404: 'Not Found. The resource could not be found.',
    500: 'Internal Server Error. Something went wrong.',
    502: 'Bad Gateway. The server is unavailable.',
    503: 'Service Unavailable. Please try again later.',
  }

  if (statusCode >= 200 && statusCode < 300) {
    const result = await response.json();
    return {
      success: true,
      message: messages[statusCode],
      data: result,
    }
  } else {
    return {
      success: false,
      message: messages[statusCode],
      data: null,
    }
  }

}