import { UserOutlined } from "@ant-design/icons"
import { Avatar, Card, List, Space, Tag, Typography } from "antd"

const { Title, Text } = Typography

export default function NewsFeed({ news }) {
	return (
		<List
			itemLayout="vertical"
			dataSource={news}
			style={{ display: "grid", gridTemplateColumns: "1fr", gap: 16 }}
			renderItem={(item) => (
				<List.Item style={{ marginBottom: 0 }}>
					<Card
						hoverable
						style={{ width: "100%", minHeight: 200, overflow: "hidden" }}
						bodyStyle={{
							padding: 16,
							display: "flex",
							flexDirection: "column",
							height: "100%",
						}}
					>
						<Space direction="vertical" style={{ width: "100%", flex: 1 }}>
							<Title level={4} style={{ marginBottom: 4 }}>
								{item.title}
							</Title>
							<div
								style={{
									display: "flex",
									alignItems: "center",
									marginBottom: 8,
								}}
							>
								<Avatar
									size="small"
									icon={<UserOutlined />}
									style={{ marginRight: 8 }}
								/>
								<Text type="secondary">{item.author}</Text>
								<Text type="secondary" style={{ marginLeft: 8 }}>
									{item.date}
								</Text>
								<Text type="secondary" style={{ marginLeft: "auto" }}>
									👁️‍🗨️ {item.views}
								</Text>
							</div>
							<Text
								style={{
									display: "-webkit-box",
									textOverflow: "ellipsis",
									WebkitBoxOrient: "vertical",
									WebkitLineClamp: 3,
									overflow: "hidden",
									flex: 1,
								}}
							>
								{item.summary}
							</Text>
							<div style={{ marginTop: 8 }}>
								<Space wrap>
									{item.tags.map((tag) => (
										<Tag key={tag}>{tag}</Tag>
									))}
								</Space>
							</div>
							<Space style={{ marginTop: 8 }}>
								<Text type="success">👍 {item.reaction.likes}</Text>
								<Text type="danger">👎 {item.reaction.dislikes}</Text>
							</Space>
						</Space>
					</Card>
				</List.Item>
			)}
		/>
	)
}
