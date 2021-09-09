window.BENCHMARK_DATA = {
  "lastUpdate": 1631227157527,
  "repoUrl": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "erinzosa@ucla.edu",
            "name": "Teo Zosa"
          },
          "committer": {
            "email": "TeoZosa@users.noreply.github.com",
            "name": "Teofilo Zosa"
          },
          "id": "b829e3700f25e721fe246e3dc0a81f7f29ea263d",
          "message": ":bug: Prevent Sphinx from eating true top-level section header\n\nSee: readthedocs/sphinx-autoapi#302",
          "timestamp": "2021-09-09T22:31:28Z",
          "tree_id": "19af1c9bf15546f85bfa0d881fd3476aed49a6dd"
        },
        "date": 1631227088618,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 14568.682696792142,
            "unit": "iter/sec",
            "range": "stddev: 0.0000669010146389179",
            "extra": "mean: 68.64038573783947 usec\nrounds: 11990"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 4359968.255355979,
            "unit": "iter/sec",
            "range": "stddev: 3.326350100840165e-7",
            "extra": "mean: 229.35946810400142 nsec\nrounds: 172414"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 12445.940815656402,
            "unit": "iter/sec",
            "range": "stddev: 0.000035116418614054466",
            "extra": "mean: 80.34748154531215 usec\nrounds: 8643"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 121400.26468897317,
            "unit": "iter/sec",
            "range": "stddev: 0.000014410303542529636",
            "extra": "mean: 8.237214330314638 usec\nrounds: 39999"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 14833.03239398871,
            "unit": "iter/sec",
            "range": "stddev: 0.00005388575183113999",
            "extra": "mean: 67.41709809824617 usec\nrounds: 13038"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 4102155.8328600996,
            "unit": "iter/sec",
            "range": "stddev: 4.61174061143548e-7",
            "extra": "mean: 243.77425937567483 nsec\nrounds: 163935"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]"
          },
          "committer": {
            "email": "TeoZosa@users.noreply.github.com",
            "name": "Teofilo Zosa"
          },
          "id": "fb9188d1785ab62ac6a66472876729a15acb3f82",
          "message": ":arrow_up: Bump python in /{{cookiecutter.project_slug}}\n\nBumps python from `3d82b79` to `cd1045d`.\n\n---\nupdated-dependencies:\n- dependency-name: python\n  dependency-type: direct:production\n  update-type: version-update:semver-patch\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>",
          "timestamp": "2021-09-09T22:31:40Z",
          "tree_id": "689c353cbb80b5228a92b120b602bd2c27f6a1b9"
        },
        "date": 1631227154789,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 14322.629818394858,
            "unit": "iter/sec",
            "range": "stddev: 0.000030249923279459455",
            "extra": "mean: 69.81958011060782 usec\nrounds: 1991"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 4892823.17361864,
            "unit": "iter/sec",
            "range": "stddev: 1.4374083512738838e-7",
            "extra": "mean: 204.3809809831114 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 12745.889178997717,
            "unit": "iter/sec",
            "range": "stddev: 0.000015105239801160727",
            "extra": "mean: 78.45666833882167 usec\nrounds: 9766"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 139366.5670668332,
            "unit": "iter/sec",
            "range": "stddev: 0.00000470796562432793",
            "extra": "mean: 7.175322037748481 usec\nrounds: 48544"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 14830.619614683412,
            "unit": "iter/sec",
            "range": "stddev: 0.00002014217800445414",
            "extra": "mean: 67.4280661213862 usec\nrounds: 14065"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 4760451.362939329,
            "unit": "iter/sec",
            "range": "stddev: 1.9646350468338378e-7",
            "extra": "mean: 210.06411446289488 nsec\nrounds: 196079"
          }
        ]
      }
    ]
  }
}