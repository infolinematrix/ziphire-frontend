
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ExternalLink } from "lucide-react"
import { cookies } from "next/headers"
import Image from "next/image"
import Link from "next/link"



export default function JobCard() {



  return (
    <>
      <Card className="h-full border shadow-sm transition-all hover:shadow-md">
                    <CardContent className="flex h-full flex-col">
                      {/* Tweet Header */}
                      <div className="mb-4 flex items-start justify-between">
                        <div className="flex items-center gap-3">
                          <div className="relative h-10 w-10 overflow-hidden rounded-full">
                            <Image
                              src={tweet.user.avatar}
                              alt={tweet.user.name}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div>
                            <div className="flex items-center gap-1">
                              <span className="text-sm font-semibold">
                                {tweet.user.name}
                              </span>
                              {tweet.user.verified && (
                                <VerifiedIcon
                                  className="h-3.5 w-3.5 text-sky-500"
                                  fill="#0ea5e9"
                                />
                              )}
                            </div>
                            <div className="text-muted-foreground text-xs">
                              {tweet.user.handle}
                            </div>
                          </div>
                        </div>
                        <Twitter className="h-5 w-5 text-sky-500" />
                      </div>

                      {/* Tweet Content */}
                      <p className="mb-4 grow text-sm">{tweet.content}</p>

                      {/* Tweet Date and Metrics */}
                      <div className="border-t pt-4">
                        <div className="text-muted-foreground mb-2 text-xs">
                          {tweet.date}
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-4">
                            <div className="text-muted-foreground flex items-center gap-1 hover:text-sky-500">
                              <MessageCircle className="h-4 w-4" />
                              <span className="text-xs">
                                {tweet.metrics.replies}
                              </span>
                            </div>
                            <div className="text-muted-foreground flex items-center gap-1 hover:text-green-500">
                              <Repeat2 className="h-4 w-4" />
                              <span className="text-xs">
                                {tweet.metrics.retweets}
                              </span>
                            </div>
                            <div className="text-muted-foreground flex items-center gap-1 hover:text-red-500">
                              <Heart className="h-4 w-4" />
                              <span className="text-xs">
                                {tweet.metrics.likes}
                              </span>
                            </div>
                          </div>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8 rounded-full hover:bg-sky-50 hover:text-sky-500 dark:hover:bg-sky-950/50"
                            asChild
                          >
                            <Link
                              href={tweet.url}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <ExternalLink className="h-4 w-4" />
                            </Link>
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
    </>
  )
}