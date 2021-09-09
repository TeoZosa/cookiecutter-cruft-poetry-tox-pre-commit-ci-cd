window.BENCHMARK_DATA = {
  "lastUpdate": 1631194566258,
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
          "id": "3cb46740e775c27cf0ade0420747731132f58b67",
          "message": "Merge pull request #324 from TeoZosa/dependabot/pip/hypothesis-6.20.0",
          "timestamp": "2021-09-09T13:25:30Z",
          "tree_id": "7762d483250b9baf04999efd52f5d14745613e00"
        },
        "date": 1631194561318,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 15302.447821994088,
            "unit": "iter/sec",
            "range": "stddev: 0.000007597135175373318",
            "extra": "mean: 65.34902204095137 usec\nrounds: 11751"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 3924818.638382842,
            "unit": "iter/sec",
            "range": "stddev: 2.510742103011489e-7",
            "extra": "mean: 254.78884303607822 nsec\nrounds: 185186"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 12390.757324172051,
            "unit": "iter/sec",
            "range": "stddev: 0.00001545880837176421",
            "extra": "mean: 80.7053171842198 usec\nrounds: 7018"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 118179.6734033777,
            "unit": "iter/sec",
            "range": "stddev: 0.0000037911452402523635",
            "extra": "mean: 8.461692025385297 usec\nrounds: 39526"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 15415.881449494234,
            "unit": "iter/sec",
            "range": "stddev: 0.000018219962582030373",
            "extra": "mean: 64.86816879568103 usec\nrounds: 11351"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 3936002.9841136313,
            "unit": "iter/sec",
            "range": "stddev: 2.1361832046835863e-7",
            "extra": "mean: 254.06484802874937 nsec\nrounds: 188680"
          }
        ]
      }
    ]
  }
}