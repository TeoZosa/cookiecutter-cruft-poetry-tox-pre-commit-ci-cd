window.BENCHMARK_DATA = {
  "lastUpdate": 1630073732416,
  "repoUrl": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub"
          },
          "id": "cc63e5f3b9874095ba94b7ab32115399696a221d",
          "message": "Merge pull request #302 from TeoZosa/dependabot/github_actions/JamesIves/github-pages-deploy-action-4.1.5",
          "timestamp": "2021-08-27T13:11:54Z",
          "tree_id": "da4540a2d78be86ddfef30bb40fa313219e2743f"
        },
        "date": 1630073730017,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 14419.01207466963,
            "unit": "iter/sec",
            "range": "stddev: 0.00012422153793005284",
            "extra": "mean: 69.35287901982787 usec\nrounds: 12531"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 3970292.5008286713,
            "unit": "iter/sec",
            "range": "stddev: 5.616796604063832e-7",
            "extra": "mean: 251.87061149529535 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 12772.648781674316,
            "unit": "iter/sec",
            "range": "stddev: 0.000032558788324324116",
            "extra": "mean: 78.29229606898453 usec\nrounds: 7174"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 120669.16301614184,
            "unit": "iter/sec",
            "range": "stddev: 0.000008658894647928374",
            "extra": "mean: 8.287121373885975 usec\nrounds: 42917"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 15151.415702920702,
            "unit": "iter/sec",
            "range": "stddev: 0.00005787465539550718",
            "extra": "mean: 66.00043320092078 usec\nrounds: 11325"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 3890210.2527323226,
            "unit": "iter/sec",
            "range": "stddev: 4.4100339337998207e-7",
            "extra": "mean: 257.05551500662534 nsec\nrounds: 200000"
          }
        ]
      }
    ]
  }
}