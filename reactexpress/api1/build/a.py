


h = arr[:x]
heapq.heapify(h)
ans = []
print(h)
for i in range(len(arr)-x):
    a = arr[i]
    print(h)
    ans.append(heapq.heappop(h))
    heapq.heappush(h,a)
return max(ans)