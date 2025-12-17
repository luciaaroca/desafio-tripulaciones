import api from "./api_chat";

export const sendChatMessage = async (message, sessionId = "default-session") => {
  try {
    const body = {
      message,
      session_id: sessionId,
      user_id: 1,
      role: "user",
      model: "llama-3",
    };

    const response = await api.post("ask", body);

    return response.data;
  } catch (error) {
    throw error.response?.data || {
      mensaje: "Error conectando con la API",
    };
  }
};
